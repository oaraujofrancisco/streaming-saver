package br.com.streaming.saver.service;

import br.com.streaming.saver.dto.FilmeOuSerieDTO;
import br.com.streaming.saver.entity.Filme;
import br.com.streaming.saver.entity.Serie;
import br.com.streaming.saver.entity.Streaming;
import br.com.streaming.saver.repository.FilmeRepository;
import br.com.streaming.saver.repository.SerieRepository;
import org.springframework.stereotype.Service;

@Service
public class SerieFilmeService {

    private final FilmeRepository filmeRepository;

    private final SerieRepository serieRepository;

    public SerieFilmeService(
            FilmeRepository filmeRepository,
            SerieRepository serieRepository) {
        this.filmeRepository = filmeRepository;
        this.serieRepository = serieRepository;
    }

    public Filme salvarFilme(FilmeOuSerieDTO filmeOuSerieDTO, Streaming streaming) {
        Filme filmeParaSalvar = new Filme();

        filmeParaSalvar.setId(filmeOuSerieDTO.getId());
        filmeParaSalvar.setNome(filmeOuSerieDTO.getNome());
        filmeParaSalvar.getStreamings().add(streaming);
        return filmeRepository.save(filmeParaSalvar);

    }

    public Serie salvarSerie(FilmeOuSerieDTO filmeOuSerieDTO, Streaming streaming) {
        Serie serieParaSalvar = new Serie();

        serieParaSalvar.setId(filmeOuSerieDTO.getId());
        serieParaSalvar.setNome(filmeOuSerieDTO.getNome());
        serieParaSalvar.getStreamings().add(streaming);
        return serieRepository.save(serieParaSalvar);
    }

    public Filme buscarSeriePorIdOuSalvarFilme(Long id, FilmeOuSerieDTO filmeOuSerieDTO, Streaming streaming) {
        return filmeRepository.findById(id).orElse(this.salvarFilme(filmeOuSerieDTO, streaming));
    }

    public Serie buscarSeriePorIdOuSalvarSerie(Long id, FilmeOuSerieDTO filmeOuSerieDTO, Streaming streaming) {
        return serieRepository.findById(id).orElse(this.salvarSerie(filmeOuSerieDTO, streaming));
    }
}
