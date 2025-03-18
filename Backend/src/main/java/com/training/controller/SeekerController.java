package com.training.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.entity.Seeker;
import com.training.service.SeekerServices;

@CrossOrigin(origins = "http://localhost:5173") // react understand back end coming
@RestController
@RequestMapping("/run") //starting point
public class SeekerController {
	@Autowired  // spring boot container (in built) will create object according to requirement -> Inversion of control
	SeekerServices seekerService;
	
	@GetMapping("/get") // get data 
	public List<Seeker> getMessage() {
		System.out.println(" I am in controller "); 
		
		List<Seeker> listOfSeeker = null;
	
        listOfSeeker = seekerService.getAllSeekers();
       
        for(Seeker seeker : listOfSeeker) {
        	System.out.println( " Seeker num "+ seeker.getName());
        }
		
	
		return listOfSeeker;
	}
	
	// Create Employee Record
		@PostMapping("/store") // store data
		public Seeker createSeeker(@RequestBody Seeker seeker) { // capture data from postman 
			return seekerService.storeSeeker(seeker);
		}
		
		// Update employee rest api	
		@PutMapping("/update/{id}") 
		public ResponseEntity<Seeker> updateSeeker(@PathVariable Long id, @RequestBody Seeker seekerDetails){
			Seeker seek = seekerService.updateSeeker(seekerDetails, id);
			return ResponseEntity.ok(seek);
		}

		//delete employee rest api  
				@DeleteMapping("/delete/{id}") 
				public ResponseEntity<Map<String,Boolean>> deleteSeeker(@PathVariable Long id){			
					seekerService.deleteSeeker(id);			
					Map<String, Boolean> response = new HashMap<String, Boolean>();
					response.put("deleted", Boolean.TRUE);
					return ResponseEntity.ok(response);			
				}
				
				@GetMapping("/seeker/{id}")
				public Seeker getSeekById(@PathVariable Long id) {

					System.out.println(" Emp Id " + id);

					return seekerService.getSeekById(id);
				}
}
