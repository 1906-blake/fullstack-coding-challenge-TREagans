package com.thas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.thas.models.Book;
import com.thas.services.BookService;

@RestController
@RequestMapping("/books")
public class BookController {
	
	
	@Autowired
	private BookService bookService;
	
	
	@GetMapping
	public List<Book> findAll() {
		return bookService.findAll();
	}
	
	@GetMapping("/{bookId}")
	public Book getOne(@PathVariable int bookId) {
		return bookService.getOne(bookId);
	}
	
	@GetMapping("/title/{title}")
	public List<Book> findBrandByName(@PathVariable String title) {
		return bookService.findBookByTitle(title);
	}
	
	@GetMapping("rating/{rating}")
	public List<Book> findByRating(@PathVariable double rating){
	return bookService.findByRating(rating);
	}
	
	@GetMapping("/popular")
	public List<Book> findMostPopular(Book popular){
	return bookService.findMostPopular(popular);
	}
	
	@GetMapping("/newrelease")
	public List<Book> findNewRelease(Book newrelease){
	return bookService.findNewRelease(newrelease);
	}
	
	@PostMapping
	public Book addBook(@RequestBody Book book) {
		return bookService.saveAndFlush(book);
	}

}
