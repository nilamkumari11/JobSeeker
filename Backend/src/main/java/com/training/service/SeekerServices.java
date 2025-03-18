package com.training.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.training.entity.Seeker;
import com.training.repository.SeekerRepository;

@Service
public class SeekerServices {
	@Autowired
	SeekerRepository seekerRepository;
	
	public List<Seeker> getAllSeekers() {

		return seekerRepository.findAll();
	}
	
	public Seeker storeSeeker(Seeker seek) {
		return seekerRepository.save(seek);
	}
	
	public Seeker updateSeeker(Seeker seek, Long SerialNo) {
		Seeker seeker = seekerRepository.findById(SerialNo).get();
		System.out.println(" Seeker "+ seeker);
		
		seeker.setName(seek.getName());
		seeker.setEmail(seek.getEmail());
		seeker.setSkills(seek.getSkills());
		seeker.setJobType(seek.getJobType());
		
		Seeker updatedSeeker = seekerRepository.save(seeker);	
		System.out.println("End of the method updateSeeker()");
		
		return updatedSeeker;
	}
	
	public void deleteSeeker(Long id) {
		
		boolean flag = false; 
		
		Seeker seeker = seekerRepository.findById(id).get();
		
		seekerRepository.delete(seeker);
		
	}
	
	public Seeker getSeekById(Long id) {

		return seekerRepository.findById(id).get();

	}

}
