package com.example.demo;



import lombok.Data;
import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.ManyToOne;

@Data
@Entity
public class Votes {

	private @Id
	@GeneratedValue
	Long id;
	@ManyToOne
	private Competitor voteCompetitor;
    private int point;

	private Votes() {}

	public Votes(Competitor voteCompetitor, int point) {
		this.voteCompetitor = voteCompetitor;
		this.point = point;
	}
}