package com.moviekioskicrm.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "movies")
public class Movies {
	
	
	//@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private long id;
	
	@Column(name = "title")
	private String title;
	
	@Column(name = "release_date")
	private String release_date;
	
	@Column(name = "original_language")
	private String original_language;
	
	@Column(name = "poster_path")
	private String poster_path;
	
	public Movies() {
		
	}

	public Movies(long id, String title, String release_date, String original_language, String poster_path) {
	
		this.id                = id;
		this.title             = title;
		this.release_date      = release_date;
		this.original_language = original_language;
		this.poster_path       = poster_path;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getRelease_date() {
		return release_date;
	}

	public void setRelease_date(String release_date) {
		this.release_date = release_date;
	}

	public String getOriginal_language() {
		return original_language;
	}

	public void setOriginal_language(String original_language) {
		this.original_language = original_language;
	}

	public String getPoster_path() {
		return poster_path;
	}

	public void setPoster_path(String poster_path) {
		this.poster_path = poster_path;
	}
	
	

}
