package com.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.training.entity.Seeker;

@Repository
public interface SeekerRepository extends JpaRepository<Seeker,Long>{
	
}
