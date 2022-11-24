package br.com.streaming.saver.dto;

public class FilmeOuSerieDTO {
    private Long id;

    private String nome;

    private String filmeOuSerie;

    private Boolean assistindo;

    private Long quantidadeAssistido;

    public FilmeOuSerieDTO() {
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

    public String getFilmeOuSerie() {
        return filmeOuSerie;
    }

    public void setFilmeOuSerie(String filmeOuSerie) {
        this.filmeOuSerie = filmeOuSerie;
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
