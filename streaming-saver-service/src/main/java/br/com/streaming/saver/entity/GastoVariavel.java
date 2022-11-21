package br.com.streaming.saver.entity;

import javax.persistence.Entity;

@Entity
public class GastoVariavel extends Gasto {

    private Long parcelaAtual;

    private Long parcelasTotal;

    private Long valorParcela;

    public GastoVariavel() {
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
}
