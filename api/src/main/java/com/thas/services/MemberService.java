package com.thas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thas.models.LibMember;
import com.thas.repos.MemberRepo;

@Service
public class MemberService {
	
	@Autowired
	private MemberRepo memberRepo;

	public List<LibMember> findAll() {
		return memberRepo.findAll();
	}

	public LibMember getOne(int id) {
		return memberRepo.getOne(id);
	}
	
	public LibMember updateUser(int id) {
		return memberRepo.getOne(id);
	}

	public LibMember findByUsername(String username) {
		return memberRepo.findByUsername(username);
	}

	public LibMember saveAndFlush(LibMember member) {
		return memberRepo.saveAndFlush(member);
	}

	public LibMember findByUsernameAndPassword(String username, String password) {
		return memberRepo.findByUsernameAndPassword(username, password);
	}

//	public LibMember patchUpdateUser(LibMember putUpdateMember, int memberId) {
//		return memberRepo.saveAndFlush(putUpdateMember, memberId);
//		
//	}
	
//	public List<LibMember> findByRole(String role) {
//		return memberRepo.findByRole(role);
//	}

}
