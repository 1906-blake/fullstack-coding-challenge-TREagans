package com.thas.models;

//	import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

//import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

	
	@Entity
	@Table(name = "lib_member")
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})  // fixes lazyloading serialization error
	public class LibMember {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name = "memberid")
		private int memberId;
		
		@Column(name = "firstname")
		private String firstName;
		
		@Column(name = "lastname")
		private String lastName;
		
		private String username;

		@Column(name = "pass")
		private String password;

		private String phone;

		private String email;
		
		@Column(name = "membershipdate")
		private Date membershipDate;
		private int points;
		
		
		// joining the roleid from this table (LibMember) with the role
		// from the MemberRole table
//		@ManyToOne
//		@JoinColumn(name = "roleid")
//		private MemberRole role;
		
		@ManyToOne
		@JoinColumn(name = "wishlist")
		private Book bookid;

		public LibMember() {
			super();
			// TODO Auto-generated constructor stub
		}

		public LibMember(int memberId, String firstName, String lastName, String username, String password,
				String phone, String email, Date membershipDate, int points, Book bookid) {
			super();
			this.memberId = memberId;
			this.firstName = firstName;
			this.lastName = lastName;
			this.username = username;
			this.password = password;
			this.phone = phone;
			this.email = email;
			this.membershipDate = membershipDate;
			this.points = points;
			this.bookid = bookid;
		}

		public int getMemberId() {
			return memberId;
		}

		public void setMemberId(int memberId) {
			this.memberId = memberId;
		}

		public String getFirstName() {
			return firstName;
		}

		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}

		public String getLastName() {
			return lastName;
		}

		public void setLastName(String lastName) {
			this.lastName = lastName;
		}

		public String getUsername() {
			return username;
		}

		public void setUsername(String username) {
			this.username = username;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		public String getPhone() {
			return phone;
		}

		public void setPhone(String phone) {
			this.phone = phone;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public Date getMembershipDate() {
			return membershipDate;
		}

		public void setMembershipDate(Date membershipDate) {
			this.membershipDate = membershipDate;
		}

		public int getPoints() {
			return points;
		}

		public void setPoints(int points) {
			this.points = points;
		}

		public Book getBookid() {
			return bookid;
		}

		public void setBookid(Book bookid) {
			this.bookid = bookid;
		}

		@Override
		public int hashCode() {
			final int prime = 31;
			int result = 1;
			result = prime * result + ((bookid == null) ? 0 : bookid.hashCode());
			result = prime * result + ((email == null) ? 0 : email.hashCode());
			result = prime * result + ((firstName == null) ? 0 : firstName.hashCode());
			result = prime * result + ((lastName == null) ? 0 : lastName.hashCode());
			result = prime * result + memberId;
			result = prime * result + ((membershipDate == null) ? 0 : membershipDate.hashCode());
			result = prime * result + ((password == null) ? 0 : password.hashCode());
			result = prime * result + ((phone == null) ? 0 : phone.hashCode());
			result = prime * result + points;
			result = prime * result + ((username == null) ? 0 : username.hashCode());
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
			LibMember other = (LibMember) obj;
			if (bookid == null) {
				if (other.bookid != null)
					return false;
			} else if (!bookid.equals(other.bookid))
				return false;
			if (email == null) {
				if (other.email != null)
					return false;
			} else if (!email.equals(other.email))
				return false;
			if (firstName == null) {
				if (other.firstName != null)
					return false;
			} else if (!firstName.equals(other.firstName))
				return false;
			if (lastName == null) {
				if (other.lastName != null)
					return false;
			} else if (!lastName.equals(other.lastName))
				return false;
			if (memberId != other.memberId)
				return false;
			if (membershipDate == null) {
				if (other.membershipDate != null)
					return false;
			} else if (!membershipDate.equals(other.membershipDate))
				return false;
			if (password == null) {
				if (other.password != null)
					return false;
			} else if (!password.equals(other.password))
				return false;
			if (phone == null) {
				if (other.phone != null)
					return false;
			} else if (!phone.equals(other.phone))
				return false;
			if (points != other.points)
				return false;
			if (username == null) {
				if (other.username != null)
					return false;
			} else if (!username.equals(other.username))
				return false;
			return true;
		}

		@Override
		public String toString() {
			return "LibMember [memberId=" + memberId + ", firstName=" + firstName + ", lastName=" + lastName
					+ ", username=" + username + ", password=" + password + ", phone=" + phone + ", email=" + email
					+ ", membershipDate=" + membershipDate + ", points=" + points + ", bookid="
					+ bookid + "]";
		}

		
		
		
		
		

		

}
