package br.com.streaming.saver.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "tb_usuario")
public class Usuario implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private String senha;

    private String email;

    @OneToMany
    private List<Streaming> streamingAssinados;

    @OneToMany
    private List<Gasto> gastosUsuario;

    public Usuario() {
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

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Streaming> getStreamingAssinados() {
        return streamingAssinados;
    }

    public void setStreamingAssinados(List<Streaming> streamingAssinados) {
        this.streamingAssinados = streamingAssinados;
    }

    public List<Gasto> getGastosUsuario() {
        return gastosUsuario;
    }

    public void setGastosUsuario(List<Gasto> gastosUsuario) {
        this.gastosUsuario = gastosUsuario;
    }
}
