package com.employees.services;

import com.employees.domain.User;
import com.employees.repository.AuthorityRepository;
import com.employees.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@Slf4j
public class UserService {
    private final UserRepository userRepository;
    private final AuthorityRepository authorityRepository;

    public UserService(UserRepository userRepository, AuthorityRepository authorityRepository) {
        this.userRepository = userRepository;
        this.authorityRepository = authorityRepository;
    }

    public Optional<User> getUserByLogin(String login) {
        return userRepository.findByLogin(login);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User findOneWithAuthoritiesByLogin(String login) {
        return userRepository.findOneWithAuthoritiesByLogin(login).get();
    }

    public boolean login(User user) {
        System.out.println("Login: " + user.getLogin());
        User dbUser = userRepository.findByLogin(user.getLogin()).get();
        return user.getPassword() == dbUser.getPassword();
    }
}
