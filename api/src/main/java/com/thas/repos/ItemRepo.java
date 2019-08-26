package com.thas.repos;

//import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;

import com.thas.models.GroceryItems;

public interface ItemRepo extends JpaRepository<GroceryItems, Integer> {
	
//	@Query("SELECT r FROM GroceryItems r WHERE r.listid = :listId")
//	List<GroceryItems> getItemsByListHQL(@Param("listId") int listId);

}
