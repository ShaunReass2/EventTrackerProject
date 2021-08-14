package com.skilldistillery.motorcycles.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.motorcycles.entities.Motorcycle;
import com.skilldistillery.motorcycles.services.MotorcycleService;

@CrossOrigin({"*", "http://localhost:4210"})
@RequestMapping("api")
@RestController
public class MotorcycleController {
	
	@Autowired
	private MotorcycleService motorcycleSvc; 
	
	@GetMapping("motorcycles")
	public List<Motorcycle> listMotorcycles() {
		return motorcycleSvc.allMotorcycles(); 
	}
	
	@GetMapping("motorcycle/{id}")
	public Motorcycle show(@PathVariable Integer id, HttpServletResponse res) {

		Motorcycle m = motorcycleSvc.findById(id);
		return m;		
	}
	
	@PostMapping("motorcycle")
	public Motorcycle createMotorcycle(@RequestBody Motorcycle motorcycle, HttpServletRequest req, HttpServletResponse res) {
		
		try {
			motorcycle=motorcycleSvc.create(motorcycle);
			//res.setStatus(201);
			res.setStatus(200);
			return motorcycle;
			
		} catch (Exception e) {
			res.setStatus(400);
			motorcycle = null;
		}
		return motorcycle;
	}
	
	@PutMapping("motorcycle")
	public Motorcycle updateMotorcyle(@RequestBody Motorcycle motorcycle, HttpServletRequest req, HttpServletResponse res) {
		
		try {
			motorcycle=motorcycleSvc.update(motorcycle);
			//res.setStatus(201);
			res.setStatus(200);
			return motorcycle;
			
		} catch (Exception e) {
			res.setStatus(400);
			motorcycle = null;
		}
		return motorcycle;
	}
	
	@DeleteMapping("motorcycle/{id}")
	public String deleteMotorcycle(@PathVariable Integer id, HttpServletResponse res) {
		
		try {
			boolean deleted = motorcycleSvc.delete(id);
			if (deleted) {
				res.setStatus(204);
				return "Deleted";
				
			} else {
				res.setStatus(404);
				return "Not Found";
			}
			
		} catch (Exception e) {
			res.setStatus(400);
			return "Failed to delete";
		}
	}	
}
