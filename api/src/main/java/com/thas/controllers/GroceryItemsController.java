package com.thas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thas.models.GroceryItems;
import com.thas.models.GroceryList;
import com.thas.services.ItemService;

@RestController
@RequestMapping("/items")
public class GroceryItemsController {
	
	@Autowired
	private ItemService itemService;
	
	
	
	@GetMapping
	public List<GroceryItems> findAll() {
		return itemService.findAll();
	}
	
	@PostMapping()
	public GroceryItems addNewItem(@RequestBody GroceryItems item) {
		return itemService.saveAndFlush(item);
	}
	
//	@GetMapping("list/{listId}")
//	public List<GroceryItems> getItemsByList(@PathVariable GroceryList listId){
//	return itemService.getItemsByList(listId.getListId());
//	}
	
//	@GetMapping("/{listId}")
//	public List<GroceryItems> viewListById(@PathVariable int id)

}
