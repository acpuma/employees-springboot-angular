package com.employees.controller;

import com.employees.domain.Authority;
import com.employees.domain.User;
import com.employees.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }

    @GetMapping("/{login}")
    public ResponseEntity<User> getUser(@PathVariable String login) {
        return new ResponseEntity<>(userService.getUserByLogin(login).get(), HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        return new ResponseEntity<>(userService.createUser(user), HttpStatus.OK);
    }

    @GetMapping("/auth/{login}")
    public Set<String> getUserAuthorities(@PathVariable String login) {
        return userService.getUserByLogin(login).get().getAuthorities()
            .stream().map(Authority::getRole).collect(Collectors.toSet());
    }

    @GetMapping("/api/authentication")
    public boolean login(@RequestBody User user) {
        return userService.login(user);
    }
}
