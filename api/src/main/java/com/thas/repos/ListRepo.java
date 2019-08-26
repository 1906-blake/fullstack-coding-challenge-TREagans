package com.thas.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thas.models.GroceryList;

public interface ListRepo extends JpaRepository<GroceryList, Integer> {

//	GroceryList save(int listId, GroceryItems item);

}
