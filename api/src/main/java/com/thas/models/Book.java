package com.thas.models;


import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "grocerylist")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Book {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	@Column(name = "bookid")
	private int bookId;
	private String title;
	private String author;
	private double rating;
	private String image;
	
	@Column(name = "publishingcompany")
	private String pubCompany;
	
	@Column(name = "publishingdate")
	private Date pubDate;
	private String genre;
	
	private String description;
	
	@Column(name = "pointcost")
	private int pointCost;
	
	@Column(name = "bookvalue")
	private int bookValue;
	
	private String category;

	
	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Book(int bookId, String title, String author, double rating, String image, String pubCompany, Date pubDate,
			String genre, String description, int pointCost, int bookValue, String category) {
		super();
		this.bookId = bookId;
		this.title = title;
		this.author = author;
		this.rating = rating;
		this.image = image;
		this.pubCompany = pubCompany;
		this.pubDate = pubDate;
		this.genre = genre;
		this.description = description;
		this.pointCost = pointCost;
		this.bookValue = bookValue;
		this.category = category;
	}


	public int getBookId() {
		return bookId;
	}


	public void setBookId(int bookId) {
		this.bookId = bookId;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getAuthor() {
		return author;
	}


	public void setAuthor(String author) {
		this.author = author;
	}


	public double getRating() {
		return rating;
	}


	public void setRating(double rating) {
		this.rating = rating;
	}


	public String getImage() {
		return image;
	}


	public void setImage(String image) {
		this.image = image;
	}


	public String getPubCompany() {
		return pubCompany;
	}


	public void setPubCompany(String pubCompany) {
		this.pubCompany = pubCompany;
	}


	public Date getPubDate() {
		return pubDate;
	}


	public void setPubDate(Date pubDate) {
		this.pubDate = pubDate;
	}


	public String getGenre() {
		return genre;
	}


	public void setGenre(String genre) {
		this.genre = genre;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public int getPointCost() {
		return pointCost;
	}


	public void setPointCost(int pointCost) {
		this.pointCost = pointCost;
	}


	public int getBookValue() {
		return bookValue;
	}


	public void setBookValue(int bookValue) {
		this.bookValue = bookValue;
	}


	public String getCategory() {
		return category;
	}


	public void setCategory(String category) {
		this.category = category;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((author == null) ? 0 : author.hashCode());
		result = prime * result + bookId;
		result = prime * result + bookValue;
		result = prime * result + ((category == null) ? 0 : category.hashCode());
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + ((genre == null) ? 0 : genre.hashCode());
		result = prime * result + ((image == null) ? 0 : image.hashCode());
		result = prime * result + pointCost;
		result = prime * result + ((pubCompany == null) ? 0 : pubCompany.hashCode());
		result = prime * result + ((pubDate == null) ? 0 : pubDate.hashCode());
		long temp;
		temp = Double.doubleToLongBits(rating);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((title == null) ? 0 : title.hashCode());
		return result;
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Book other = (Book) obj;
		if (author == null) {
			if (other.author != null)
				return false;
		} else if (!author.equals(other.author))
			return false;
		if (bookId != other.bookId)
			return false;
		if (bookValue != other.bookValue)
			return false;
		if (category == null) {
			if (other.category != null)
				return false;
		} else if (!category.equals(other.category))
			return false;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (genre == null) {
			if (other.genre != null)
				return false;
		} else if (!genre.equals(other.genre))
			return false;
		if (image == null) {
			if (other.image != null)
				return false;
		} else if (!image.equals(other.image))
			return false;
		if (pointCost != other.pointCost)
			return false;
		if (pubCompany == null) {
			if (other.pubCompany != null)
				return false;
		} else if (!pubCompany.equals(other.pubCompany))
			return false;
		if (pubDate == null) {
			if (other.pubDate != null)
				return false;
		} else if (!pubDate.equals(other.pubDate))
			return false;
		if (Double.doubleToLongBits(rating) != Double.doubleToLongBits(other.rating))
			return false;
		if (title == null) {
			if (other.title != null)
				return false;
		} else if (!title.equals(other.title))
			return false;
		return true;
	}


	@Override
	public String toString() {
		return "Book [bookId=" + bookId + ", title=" + title + ", author=" + author + ", rating=" + rating + ", image="
				+ image + ", pubCompany=" + pubCompany + ", pubDate=" + pubDate + ", genre=" + genre + ", description="
				+ description + ", pointCost=" + pointCost + ", bookValue=" + bookValue + ", category=" + category
				+ "]";
	}
	
}
