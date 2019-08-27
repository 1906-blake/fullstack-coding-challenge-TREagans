package com.thas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thas.models.GroceryItems;
import com.thas.models.GroceryList;
import com.thas.services.ListService;

@RestController
@RequestMapping("/grocery-lists")
public class GroceryListController {
	
	@Autowired
	private ListService listService;
	
	
	// get all grocery lists	
	@GetMapping
	public List<GroceryList> findAll() {
		return listService.findAll();
	}

	// create new grocery list
	@PostMapping
	public GroceryList addNewList(@RequestBody GroceryList list) {
		return listService.saveAndFlush(list);
	}
	
	@GetMapping("/{listId}")
	public GroceryList getOne(@PathVariable int listId) {
		return listService.getOne(listId);
	}
	
	// add new item to a grocery list
//	@PostMapping("/{itemId}/items")
//	public GroceryList addNewItem(@PathVariable int listId, GroceryItems item) {
//		return listService.addNewItem(listId, item);
//	}
	
	// delete item from list
	@DeleteMapping("/{listId}/items/{itemId}")
	public GroceryList listId(@PathVariable int listId, @PathVariable int itemId) {
		return listService.delete(itemId);
	}
	
	// delete list
	@DeleteMapping("/{listId}")
	public void deleteList(@PathVariable int listId) {
		listService.deleteById(listId);
	}
}
