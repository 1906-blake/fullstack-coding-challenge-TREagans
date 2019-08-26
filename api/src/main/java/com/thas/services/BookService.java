package com.thas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thas.models.Book;
import com.thas.repos.BookRepo;

@Service
public class BookService {
	
	@Autowired
	private BookRepo bookRepo;
	
	public List<Book> findAll() {
		return bookRepo.findAll();
	}
	
	public Book getOne(int bookId) {
		return bookRepo.getOne(bookId);
	}
	
	public List<Book> findBookByTitle(String title) {
		return bookRepo.findBookByTitle(title);
	}


	public Book saveAndFlush(Book book) {
		return bookRepo.saveAndFlush(book);
	}

	public List<Book> findByRating(double rating) {
		return bookRepo.findByRatingHql(rating);
	}
	
	public List<Book> findMostPopular(Book popular) {
		return bookRepo.findMostPopularHql(popular);
	}

	public List<Book> findNewRelease(Book newrelease) {
		return bookRepo.findNewReleaseHql(newrelease);
	}
}
