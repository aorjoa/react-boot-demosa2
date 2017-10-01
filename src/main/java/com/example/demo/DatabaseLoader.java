package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final CompetitorRepository competitorRepository;

    @Autowired
    public DatabaseLoader(CompetitorRepository repository) {
        this.competitorRepository = repository;
    }

	@Override
	public void run(String... strings) throws Exception {
		this.competitorRepository.save(new Competitor("อุ้ย","สาสุข"));
		this.competitorRepository.save(new Competitor("เวนิส","พยาบาล"));
	}
}