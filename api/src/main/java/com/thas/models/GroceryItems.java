package com.thas.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "groceryitems")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class GroceryItems {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	@Column(name = "id")
	private int itemId;
	private String name;
	private String category;
	
	// joining the listid from this table (GroceryItems) with the id
	// id from the GroceryList table
	@ManyToOne
	@JoinColumn(name = "listid")
	private GroceryList list;

	
	public GroceryItems() {
		super();
		// TODO Auto-generated constructor stub
	}


	public GroceryItems(int itemId, String name, String category, GroceryList id) {
		super();
		this.itemId = itemId;
		this.name = name;
		this.category = category;
		this.list = id;
	}


	public int getItemId() {
		return itemId;
	}


	public void setItemId(int itemId) {
		this.itemId = itemId;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getCategory() {
		return category;
	}


	public void setCategory(String category) {
		this.category = category;
	}


	public GroceryList getList() {
		return list;
	}


	public void setList(GroceryList list) {
		this.list = list;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((category == null) ? 0 : category.hashCode());
		result = prime * result + itemId;
		result = prime * result + ((list == null) ? 0 : list.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
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
		GroceryItems other = (GroceryItems) obj;
		if (category == null) {
			if (other.category != null)
				return false;
		} else if (!category.equals(other.category))
			return false;
		if (itemId != other.itemId)
			return false;
		if (list == null) {
			if (other.list != null)
				return false;
		} else if (!list.equals(other.list))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}


	@Override
	public String toString() {
		return "GroceryItems [itemId=" + itemId + ", name=" + name + ", category=" + category + ", list=" + list + "]";
	}

	



	
}
