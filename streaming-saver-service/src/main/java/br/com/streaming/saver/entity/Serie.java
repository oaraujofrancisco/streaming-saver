package br.com.streaming.saver.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "tb_serie")
public class Serie implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private Boolean assistindo;

    private Long quantidadeAssistido;

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
}
