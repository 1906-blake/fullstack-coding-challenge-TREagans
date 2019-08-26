package com.thas.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.thas.models.Book;

public interface BookRepo extends JpaRepository<Book, Integer>{
	
	List<Book> findBookByTitle(String title);

	Book saveAndFlush(Book book);

	@Query("SELECT r FROM Book r WHERE r.rating BETWEEN :rating AND 5 order by r.rating")
	List<Book> findByRatingHql(@Param("rating") double rating);
	
	@Query("SELECT r FROM Book r WHERE r.rating >= 4 order by r.rating")
	List<Book> findMostPopularHql(Book popular);
	
	@Query("SELECT r FROM Book r WHERE r.category='New Release'")
	List<Book> findNewReleaseHql(Book newrelease);

}
