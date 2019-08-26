package com.thas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thas.models.GroceryItems;
import com.thas.repos.ItemRepo;

@Service
public class ItemService {

	@Autowired
	private ItemRepo itemRepo;

	public GroceryItems saveAndFlush(GroceryItems item) {
		return itemRepo.save(item);
	}

	public List<GroceryItems> findAll() {
		return itemRepo.findAll();
	}
	
//	public List<GroceryItems> getItemsByList(int listId) {
//		return itemRepo.getItemsByListHQL(listId);
//	}
}
