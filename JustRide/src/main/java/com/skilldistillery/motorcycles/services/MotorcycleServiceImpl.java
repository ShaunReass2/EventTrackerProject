package com.skilldistillery.motorcycles.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.motorcycles.entities.Motorcycle;
import com.skilldistillery.motorcycles.repositories.MotorcycleRepository;

@Service
public class MotorcycleServiceImpl implements MotorcycleService {

	@Autowired
	private MotorcycleRepository motorcycleRepo; 
	
	@Override
	public List<Motorcycle> allMotorcycles() {
		
		return motorcycleRepo.findAll(); 
	}

}
