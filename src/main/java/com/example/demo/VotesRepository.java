package com.example.demo;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface VotesRepository extends CrudRepository<Votes, Long> {
}