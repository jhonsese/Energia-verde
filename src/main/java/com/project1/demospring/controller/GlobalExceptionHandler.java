package com.project1.demospring.controller;

import com.project1.demospring.exception.BadRequestException;	
import com.project1.demospring.exception.NotFoundException;
import com.project1.demospring.exception.UnauthorizedException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

	private static final Logger LOGGER = LoggerFactory.getLogger(GlobalExceptionHandler.class);

	@ExceptionHandler(BadRequestException.class)
	public ResponseEntity<Void> badRequestHandler(BadRequestException bre) {
		LOGGER.error("badRequestHandler - message {}", bre.getMessage());
		return ResponseEntity.badRequest().build();
	}

	@ExceptionHandler(NotFoundException.class)
	public ResponseEntity<Void> notFoundExceptionHandler(NotFoundException nfe) {
		LOGGER.error("notFoundExceptionHandler - message: {}", nfe.getMessage());
		return ResponseEntity.notFound().build();
	}

	@ExceptionHandler(UnauthorizedException.class)
	public ResponseEntity<Void> unauthorizedExceptionHandler(UnauthorizedException ue) {
		LOGGER.error("unauthorizedExceptionHandler - message: {}", ue.getMessage());
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
	}
}