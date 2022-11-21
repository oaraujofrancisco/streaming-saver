package br.com.streaming.saver.service;

import br.com.streaming.saver.entity.Gasto;
import br.com.streaming.saver.repository.GastoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GastoService {

    private final GastoRepository gastoRepository;

    public GastoService(GastoRepository gastoRepository) {
        this.gastoRepository = gastoRepository;
    }


    public List<Gasto> buscarTodos(Long usuarioId) {

//        gastoRepository.fin

        return gastoRepository.findAll();
    }

    public Gasto buscarPorId(Long id) {
        Optional<Gasto> gastoOptional = gastoRepository.findById(id);
        if (gastoOptional.isEmpty()) {
            throw new RuntimeException("Gasto não encontrado");
        }

        return gastoOptional.get();
    }

    public Gasto salvarGasto(Gasto gasto) {
        gasto.setId(null);

        return gastoRepository.save(gasto);
    }

    public Gasto atualizarGasto(Long id, Gasto gasto) {
        Gasto gastoParaAtualizar = buscarPorId(id);

        gastoParaAtualizar.setNome(gasto.getNome());
        gastoParaAtualizar.setValor(gasto.getValor());
        gastoParaAtualizar.setTipoGasto(gasto.getTipoGasto());
        gastoParaAtualizar.setFormaPagamento(gasto.getFormaPagamento());

        return gastoRepository.save(gastoParaAtualizar);
    }

    public List<Gasto> excluirGasto(Long id) {
        Gasto gastoParaExcluir = buscarPorId(id);

        gastoRepository.delete(gastoParaExcluir);

        return this.buscarTodos("");
    }
}
