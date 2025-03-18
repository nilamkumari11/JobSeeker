package com.training.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name ="seeker")
public class Seeker {
		@Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private long id;
	  
	  @Column(name="no") // database
	  private String SerialNo; // java 
	  
	  @Column(name="name")
	  private String Name;
	  
	  @Column(name="email")
	  private String Email;
	  
	  @Column(name="skills")
	  private String Skills;
	  
	  @Column(name="job_type")
	  private String JobType;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getSerialNo() {
		return SerialNo;
	}

	public void setSerialNo(String serialNo) {
		SerialNo = serialNo;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public String getSkills() {
		return Skills;
	}

	public void setSkills(String skills) {
		Skills = skills;
	}

	public String getJobType() {
		return JobType;
	}

	public void setJobType(String jobType) {
		JobType = jobType;
	}
}
