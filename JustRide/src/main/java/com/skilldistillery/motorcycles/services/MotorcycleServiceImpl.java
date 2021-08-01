package com.skilldistillery.motorcycles.services;

import java.util.List;
import java.util.Optional;

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
	
	public Motorcycle findById(Integer id) {		
		Optional<Motorcycle> m =motorcycleRepo.findById(id);				
		return m.get();
	}
	
	public Motorcycle update(Motorcycle m) {                                    // create(insert) and update		
		return motorcycleRepo.save(m);
	}
	
	public Motorcycle create(Motorcycle m) {                                    // create(insert) and update	
		return motorcycleRepo.save(m);
	}
	
	public boolean delete (int id) {
		
		try {
			motorcycleRepo.deleteById(id);
			return true;
			
		}catch (Exception e) {
			return false;
		}
	}	
}	
	
	
//                     Stretch Goals
//      -------------------------------------------
//	
//		
//		Motorcycle findByYear(int year); 
//	
//		Motorcycle findByMake(String make); 
//	
//		Motorcycle findByModel(String model); 
//	
//		Motorcycle findByWeightInPounds(int weightInPounds); 
//	
//		Motorcycle findByLoadCapacityInPounds(int loadCapacityInPounds); 
//	
//		Motorcycle findByFuelCapacityInGallons(Double fuelCapacityInGallons);                        
//	
//		Motorcycle findByFuelConsumptionMpg(Double fuelConsumptionInMpg);                         
//	
//		Motorcycle findByRangeInMiles(int rangeInMiles); 
//	
//		Motorcycle findByTirePressurePsi(String tirePressureInPsi); 
//	
//		Motorcycle findByRouteName(String routeName); 
//	
//		Motorcycle findByRouteCountry(String routeCountry); 
//	
//		Motorcycle findByRouteRegion(String routeRegion); 
//	
//		Motorcycle findByRouteLengthInMiles(int routeLengthInMiles); 
//	
//		Motorcycle findByRouteComments(String routeComments);                                      

	


