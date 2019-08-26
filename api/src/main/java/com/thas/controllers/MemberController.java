package com.thas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thas.models.LibMember;
import com.thas.services.MemberService;

@RestController
@RequestMapping("/members")
public class MemberController {

	@Autowired
	private MemberService memberService;

	@GetMapping
	public List<LibMember> findAll() {
		return memberService.findAll();
	}

	@GetMapping("/{memberId}")
	public LibMember getOne(@PathVariable int memberId) {
		return memberService.getOne(memberId);
	}
	
//	@PatchMapping("/update/{memberId}")
//	public LibMember updateUser(@PathVariable int memberId) {
//		return memberService.getOne(memberId);
//	}

//	@PatchMapping("/{memberId}")
//	public LibMember patchUpdateUser(@RequestBody LibMember member, @PathVariable int memberId) {
//	    return memberService.saveAndFlush(member);
//	}
	
	@GetMapping("/username/{username}")
	public LibMember findByUsername(@PathVariable String username) {
		return memberService.findByUsername(username);
	}
	
	
	@PostMapping("/login")
	public LibMember findByUsernameAndPassword(@RequestBody LibMember member) {
		// save user to sessions
		return memberService.findByUsernameAndPassword(member.getUsername(), member.getPassword());
	}
	
	@PostMapping
	public LibMember addMember(@RequestBody LibMember member) {
		return memberService.saveAndFlush(member);
	}
	
//	@GetMapping("/role/{role}")
//	public List<LibMember> findByRole(@PathVariable String role) {
//		return memberService.findByRole(role);
//	}
}
