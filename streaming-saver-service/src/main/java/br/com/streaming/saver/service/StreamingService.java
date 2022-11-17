package br.com.streaming.saver.service;

import br.com.streaming.saver.entity.Streaming;
import br.com.streaming.saver.repository.StreamingRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StreamingService {

    private final StreamingRepository streamingRepository;

    public StreamingService(StreamingRepository streamingRepository) {
        this.streamingRepository = streamingRepository;
    }


    public List<Streaming> buscarTodos(String tipoStreaming) {
        return streamingRepository.findAll();
    }

    public Streaming buscarPorId(Long id) {
        Optional<Streaming> streamingOptionalOptional = streamingRepository.findById(id);
        if (streamingOptionalOptional.isEmpty()) {
            throw new RuntimeException("Streaming não encontrado");
        }

        return streamingOptionalOptional.get();
    }

    public Streaming salvarStreaming(Streaming streaming) {
        streaming.setId(null);

        return streamingRepository.save(streaming);
    }

    public Streaming atualizarStreaming(Long id, Streaming streaming) {
        Streaming streamingParaAtualizar = buscarPorId(id);

        streamingParaAtualizar.setNome(streaming.getNome());
        streamingParaAtualizar.setValor(streaming.getValor());
        streamingParaAtualizar.setTipoGasto(streaming.getTipoGasto());
        streamingParaAtualizar.setFormaPagamento(streaming.getFormaPagamento());
        streamingParaAtualizar.setUltimoAcesso(streaming.getUltimoAcesso());
        streamingParaAtualizar.setUltimaAtualizacao(streaming.getUltimaAtualizacao());
        streamingParaAtualizar.setAtivado(streaming.getAtivado());

        return streamingRepository.save(streamingParaAtualizar);
    }

    public List<Streaming> excluirStreaming(Long id) {
        Streaming StreamingParaExcluir = buscarPorId(id);

        streamingRepository.delete(StreamingParaExcluir);

        return buscarTodos("");
    }
}
