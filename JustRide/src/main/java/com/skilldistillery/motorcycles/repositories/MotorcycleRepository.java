package com.skilldistillery.motorcycles.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.motorcycles.entities.Motorcycle;

public interface MotorcycleRepository extends JpaRepository<Motorcycle, Integer> {

}
