package com.example.demo.domain;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "history", schema = "public")
public class History {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(
        name = "datetime",
        columnDefinition = "timestamp with time zone"
    )
    private LocalDateTime datetime;

    @Column(
        name = "comtype",
        length = 200
    )
    private String comtype;

    @Column(
        name = "comstate",
        length = 200
    )
    private String comstate;

    @Column(
        name = "typehistory",
        length = 200
    )
    private String typehistory;

    @Column(
        name = "title",
        length = 200
    )
    private String title;

    @Column(
        name = "description",
        columnDefinition = "text"
    )
    private String description;

    /* ======================
       Relations
       ====================== */

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(
        name = "id_customer",
        nullable = false
    )
    @JsonIgnore
    private Customer customer;

    /* ======================
       Constructors
       ====================== */

    public History() {
    }

    public History(LocalDateTime datetime, String comtype, String comstate,
                   String typehistory, String title, String description,
                   Customer customer) {
        this.datetime = datetime;
        this.comtype = comtype;
        this.comstate = comstate;
        this.typehistory = typehistory;
        this.title = title;
        this.description = description;
        this.customer = customer;
    }

    /* ======================
       Getters & Setters
       ====================== */

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LocalDateTime getDatetime() {
        return datetime;
    }

    public void setDatetime(LocalDateTime datetime) {
        this.datetime = datetime;
    }

    public String getComtype() {
        return comtype;
    }

    public void setComtype(String comtype) {
        this.comtype = comtype;
    }

    public String getComstate() {
        return comstate;
    }

    public void setComstate(String comstate) {
        this.comstate = comstate;
    }

    public String getTypehistory() {
        return typehistory;
    }

    public void setTypehistory(String typehistory) {
        this.typehistory = typehistory;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
