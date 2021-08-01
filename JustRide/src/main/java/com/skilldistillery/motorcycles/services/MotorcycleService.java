package com.skilldistillery.motorcycles.services;

import java.util.List;

import com.skilldistillery.motorcycles.entities.Motorcycle;

public interface MotorcycleService {
	
	List<Motorcycle> allMotorcycles(); 
	
	Motorcycle findById (Integer id);
	
	Motorcycle update (Motorcycle m);
	
	Motorcycle create (Motorcycle m);
	
	boolean delete (int id);

}
