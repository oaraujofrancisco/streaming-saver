package br.com.streaming.saver.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Serie implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private Long id;

    private String nome;

    private Boolean assistindo;

    private Long quantidadeAssistido;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "serie_streaming",
            joinColumns = @JoinColumn(name = "serie"),
            inverseJoinColumns = @JoinColumn(name = "streaming"))
    private List<Streaming> streamings = new ArrayList<>();

    public Serie() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Boolean getAssistindo() {
        return assistindo;
    }

    public void setAssistindo(Boolean assistindo) {
        this.assistindo = assistindo;
    }

    public Long getQuantidadeAssistido() {
        return quantidadeAssistido;
    }

    public void setQuantidadeAssistido(Long quantidadeAssistido) {
        this.quantidadeAssistido = quantidadeAssistido;
    }

    public List<Streaming> getStreamings() {
        return streamings;
    }

    public void setStreamings(List<Streaming> streamings) {
        this.streamings = streamings;
    }
}
