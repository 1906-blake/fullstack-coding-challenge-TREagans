package com.thas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thas.models.GroceryItems;
import com.thas.models.GroceryList;
import com.thas.repos.ListRepo;

@Service
public class ListService {

	
	@Autowired
	private ListRepo listRepo;

	
	public List<GroceryList> findAll() {
		return listRepo.findAll();
	}


	public GroceryList saveAndFlush(GroceryList list) {
		return listRepo.saveAndFlush(list);
	}


	public void deleteById(int listId) {
		listRepo.deleteById(listId);;
	}


	public GroceryList getOne(int listId) {
		return listRepo.getOne(listId);
	}

//	public GroceryList deleteList(int listId) {
//		return listRepo.deleteAll(listId);
//	}
}
