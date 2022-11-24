package br.com.streaming.saver.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Gasto implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private Long valor;

    private String tipoGasto;

    private String formaPagamento;

    private Long parcelaAtual;

    private Long parcelasTotal;

    private Long valorParcela;

    private String tipo;

    @ManyToOne
    private Usuario usuario;

    public Gasto() {
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

    public Long getValor() {
        return valor;
    }

    public void setValor(Long valor) {
        this.valor = valor;
    }

    public String getTipoGasto() {
        return tipoGasto;
    }

    public void setTipoGasto(String tipoGasto) {
        this.tipoGasto = tipoGasto;
    }

    public String getFormaPagamento() {
        return formaPagamento;
    }

    public void setFormaPagamento(String formaPagamento) {
        this.formaPagamento = formaPagamento;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Long getParcelaAtual() {
        return parcelaAtual;
    }

    public void setParcelaAtual(Long parcelaAtual) {
        this.parcelaAtual = parcelaAtual;
    }

    public Long getParcelasTotal() {
        return parcelasTotal;
    }

    public void setParcelasTotal(Long parcelasTotal) {
        this.parcelasTotal = parcelasTotal;
    }

    public Long getValorParcela() {
        return valorParcela;
    }

    public void setValorParcela(Long valorParcela) {
        this.valorParcela = valorParcela;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }


}
