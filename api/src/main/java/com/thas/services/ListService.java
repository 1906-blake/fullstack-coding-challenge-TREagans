package com.thas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thas.models.GroceryItems;
import com.thas.models.GroceryList;
import com.thas.repos.ItemRepo;
import com.thas.repos.ListRepo;

@Service
public class ListService {

	
	@Autowired
	private ListRepo listRepo;
	
	@Autowired
	private ItemRepo itemRepo;

	
	public List<GroceryList> findAll() {
		return listRepo.findAll();
	}


	public GroceryList saveAndFlush(GroceryList list) {
		return listRepo.saveAndFlush(list);
	}


	public void deleteById(int listId) {
		List<GroceryItems> groceryItems = itemRepo.findByListListId(listId);
		
		// delete FK prior to deleting list
		for(int i = 0; i < groceryItems.size(); i++) {
			itemRepo.deleteById(groceryItems.get(i).getItemId());
		}
		listRepo.deleteById(listId);
	}


	public GroceryList getOne(int listId) {
		return listRepo.getOne(listId);
	}


	public GroceryList saveAndFlush(int listid, GroceryItems item) {
		return listRepo.saveAndFlush(item);
	}


	public GroceryList delete(int itemId) {
		itemRepo.deleteById(itemId);
		return null;
	}


//	public GroceryList addNewItem(int itemId, GroceryItems item) {
//		return listRepo.save(itemId, item);
//	}

//	public GroceryList deleteList(int listId) {
//		return listRepo.deleteAll(listId);
//	}
}
