package com.employees.services;

import com.employees.config.CustomUserDetails;
import com.employees.domain.Authority;
import com.employees.domain.User;
import com.employees.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Component("userDetailsService")
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByLogin(username).get();

        List<GrantedAuthority> authorities = user.getAuthorities().stream()
            .map(Authority::getRole)
            .map(SimpleGrantedAuthority::new)
            .collect(Collectors.toList());
        System.out.println("LOADED Authorities" + authorities);

        org.springframework.security.core.userdetails.User user1 =
            new org.springframework.security.core.userdetails.User(user.getLogin(), user.getPassword(), authorities);

        return new CustomUserDetails(user1);
    }
}
