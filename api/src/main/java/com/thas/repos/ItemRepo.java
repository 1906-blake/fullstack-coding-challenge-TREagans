package com.thas.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thas.models.GroceryItems;

public interface ItemRepo extends JpaRepository<GroceryItems, Integer> {

}
