package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.PagedResources;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Controller
public class MakeVotesController {

    @Autowired
    VotesRepository votesRepository;
    @Autowired
    CompetitorRepository competitorRepository;
    @ResponseBody
    @RequestMapping(path = "/vote/{id}/point/{point}", method = RequestMethod.GET)
    public String votes(@PathVariable Long id,@PathVariable int point) {
        Competitor competitor = this.competitorRepository.findOne(id);
        Votes vote = new Votes(competitor,point);
        this.votesRepository.save(vote);
        return "{\"status\":\"Voted\"}";
    }
}