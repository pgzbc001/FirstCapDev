using MASTER as M from '../db/schema';

service MasterService {
    entity Master as projection ON M {
        M.CODE as code,
        M.VALUE as value
    }
}