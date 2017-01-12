import { DomainService } from './domain.service';
import { DomainServiceHelper } from './domain.helper';
import { ProductService} from './product.service';
import { ClientService} from './client.service';
import { AlunoService} from './aluno.service';
import { EntityType } from '../meta/entity.type';
import { RuleService } from '../widgets/rule.service';

describe( 'Service: DomainService', () => {

    let helper: DomainServiceHelper;
    let service: DomainService;

    beforeEach( () => {
        service = new DomainService(new ProductService(), new ClientService(), new AlunoService());
        helper = new DomainServiceHelper(service);
    });

    it( 'Initial entities', () => {
        helper.checkService();
        helper.checkEntityTypes(3, 'products', 'clients', 'alunos');
    });

    it( 'Add entities', () => {
        service.addEntityType(new EntityType('Car', 'cars')
            .property('description', 'string')
            .property('price', 'number'));

        service.addEntityType(new EntityType('Customer', 'Customers')
            .property('name', 'string')
            .property('birthdate', 'date'));

        helper.checkService();
        helper.checkEntityTypes(5, 'products', 'clients', 'alunos', 'Car', 'Customer');
    });

});