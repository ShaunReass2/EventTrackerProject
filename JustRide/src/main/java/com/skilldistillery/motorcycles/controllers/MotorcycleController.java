package com.skilldistillery.motorcycles.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.motorcycles.entities.Motorcycle;
import com.skilldistillery.motorcycles.services.MotorcycleService;

@RequestMapping("api")
@RestController
public class MotorcycleController {
	
	@Autowired
	private MotorcycleService motorcycleSvc; 
	
	@GetMapping("motorcycles")
	public List<Motorcycle> listMotorcycles() {
		return motorcycleSvc.allMotorcycles(); 
	}

}
