package com.thas.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thas.models.LibMember;

public interface MemberRepo extends JpaRepository<LibMember, Integer> {
	LibMember findByUsername(String username);

//	@Query("FROM LibMember lm WHERE lm.username = :username AND lm.password = :password")
	LibMember findByUsernameAndPassword(String username, String password);

//	LibMember patchUpdateUser(LibMember putUpdateMember, int memberId);

//	LibMember saveAndFlush(LibMember putUpdateMember, int memberId);

//	@Query("FROM LibMember lm WHERE lm.role = :roleName")
//	List<LibMember> findByRole(String role);
	
}
