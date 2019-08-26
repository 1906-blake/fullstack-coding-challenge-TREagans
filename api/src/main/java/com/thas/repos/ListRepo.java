package com.thas.repos;

import org.springframework.data.jpa.repository.JpaRepository;


import com.thas.models.GroceryList;

public interface ListRepo extends JpaRepository<GroceryList, Integer> {

//	GroceryList listId(GroceryList list);

//	GroceryList saveAndFlush(int item, GroceryItems newitem);

//	GroceryList delete(int listid, int itemid);

//	GroceryList listId(int listid, int itemid);

//	GroceryList deleteAll(int listId);

}
