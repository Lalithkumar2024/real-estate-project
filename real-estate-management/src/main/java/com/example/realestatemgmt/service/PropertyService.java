package com.example.realestatemgmt.service;

import com.example.realestatemgmt.model.Property;
import com.example.realestatemgmt.repository.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PropertyService {

    @Autowired
    private PropertyRepository propertyRepository;

    public Property saveProperty(Property property) {
        return propertyRepository.save(property);
    }

    public Optional<Property> findById(Long id) {
        return propertyRepository.findById(id);
    }

    public List<Property> findByType(String type) {
        return propertyRepository.findByType(type);
    }

    public List<Property> findAllProperties() {
        return propertyRepository.findAll();
    }

    public Property updateProperty(Long id, Property propertyDetails) {
        return propertyRepository.findById(id).map(property -> {
            property.setName(propertyDetails.getName());
            property.setType(propertyDetails.getType());
            property.setPrice(propertyDetails.getPrice());
            property.setDimension(propertyDetails.getDimension());
            property.setNumberOfBeds(propertyDetails.getNumberOfBeds());
            property.setNumberOfBaths(propertyDetails.getNumberOfBaths());
            property.setLocation(propertyDetails.getLocation());
            property.setAddress(propertyDetails.getAddress());
            property.setImage(propertyDetails.getImage());
            property.setDescription(propertyDetails.getDescription());
            return propertyRepository.save(property);
        }).orElseThrow(() -> new RuntimeException("Property not found with id " + id));
    }

    public void deleteProperty(Long id) {
        propertyRepository.deleteById(id);
    }
}
