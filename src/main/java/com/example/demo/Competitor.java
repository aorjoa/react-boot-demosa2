package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Competitor {

	private @Id @GeneratedValue Long id;
	private String name;
	private String school;

	private Competitor() {}

	public Competitor(String name, String school) {
		this.name = name;
		this.school = school;
	}
}