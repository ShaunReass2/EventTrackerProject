package com.skilldistillery.motorcycles.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Motorcycle {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id; 
	
	private String name;
	
	private int year; 
	
	private String make; 
	
	private String model; 
	
	@Column(name = "weight_wet_pounds")
	private int weightInPounds; 
	
	@Column(name = "load_capacity_pounds")
	private int loadCapacityInPounds; 
	
	@Column(name = "fuel_capacity_gallons")
	private Double fuelCapacityInGallons;                      // verify this type is OK (lower vs upper case)
	
	@Column(name = "fuel_consumption_mpg")
	private Double fuelConsumptionInMpg;                       // verify this type is OK (lower vs upper case)
	
	@Column(name = "range_in_miles")
	private int rangeInMiles; 
	
	@Column(name = "tire_pressure_psi")
	private String tirePressureInPsi;                          // verify this type is OK. 
	
	@Column(name = "route_name")
	private String routeName; 
	
	@Column(name = "route_country")
	private String routeCountry; 
	
	@Column(name = "route_region")
	private String routeRegion; 
	
	@Column(name = "route_length_miles")
	private int routeLengthInMiles; 
	
	@Column(name = "route_comments")                     
	private String routeComments;                              // verify this type declaration is OK. It is "TEXT" in mySQL Workbench. 

	

	public Motorcycle() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public String getMake() {
		return make;
	}

	public void setMake(String make) {
		this.make = make;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public int getWeightInPounds() {
		return weightInPounds;
	}

	public void setWeightInPounds(int weightInPounds) {
		this.weightInPounds = weightInPounds;
	}

	public int getLoadCapacityInPounds() {
		return loadCapacityInPounds;
	}

	public void setLoadCapacityInPounds(int loadCapacityInPounds) {
		this.loadCapacityInPounds = loadCapacityInPounds;
	}

	public Double getFuelCapacityInGallons() {
		return fuelCapacityInGallons;
	}

	public void setFuelCapacityInGallons(Double fuelCapacityInGallons) {
		this.fuelCapacityInGallons = fuelCapacityInGallons;
	}

	public Double getFuelConsumptionInMpg() {
		return fuelConsumptionInMpg;
	}

	public void setFuelConsumptionInMpg(Double fuelConsumptionInMpg) {
		this.fuelConsumptionInMpg = fuelConsumptionInMpg;
	}

	public int getRangeInMiles() {
		return rangeInMiles;
	}

	public void setRangeInMiles(int rangeInMiles) {
		this.rangeInMiles = rangeInMiles;
	}

	public String getTirePressureInPsi() {
		return tirePressureInPsi;
	}

	public void setTirePressureInPsi(String tirePressureInPsi) {
		this.tirePressureInPsi = tirePressureInPsi;
	}

	public String getRouteName() {
		return routeName;
	}

	public void setRouteName(String routeName) {
		this.routeName = routeName;
	}

	public String getRouteCountry() {
		return routeCountry;
	}

	public void setRouteCountry(String routeCountry) {
		this.routeCountry = routeCountry;
	}

	public String getRouteRegion() {
		return routeRegion;
	}

	public void setRouteRegion(String routeRegion) {
		this.routeRegion = routeRegion;
	}

	public int getRouteLengthInMiles() {
		return routeLengthInMiles;
	}

	public void setRouteLengthInMiles(int routeLengthInMiles) {
		this.routeLengthInMiles = routeLengthInMiles;
	}

	public String getRouteComments() {
		return routeComments;
	}

	public void setRouteComments(String routeComments) {
		this.routeComments = routeComments;
	}

	@Override
	public String toString() {
		return "Motorcycle [id=" + id + ", name=" + name + ", year=" + year + ", make=" + make + ", model=" + model
				+ ", weightInPounds=" + weightInPounds + ", loadCapacityInPounds=" + loadCapacityInPounds
				+ ", fuelCapacityInGallons=" + fuelCapacityInGallons + ", fuelConsumptionInMpg=" + fuelConsumptionInMpg
				+ ", rangeInMiles=" + rangeInMiles + ", tirePressureInPsi=" + tirePressureInPsi + ", routeName="
				+ routeName + ", routeCountry=" + routeCountry + ", routeRegion=" + routeRegion
				+ ", routeLengthInMiles=" + routeLengthInMiles + ", routeComments=" + routeComments + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Motorcycle other = (Motorcycle) obj;
		if (id != other.id)
			return false;
		return true;
	}

}
