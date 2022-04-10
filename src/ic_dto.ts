
export class CreateCafeDto{
    name_cafe: string;
    address: string;
    bank_account: number;
    pan: number;
}

export class UpdateCafeDto{
    name_cafe: string;
    address: string;
    bank_account: number;
    pan: number;
}

export class CreateWaiterDto{
    full_name: string;
    address: string;
    passport: number;
    cafe_id: number;
}

export class UpdateWaiterDto{
    full_name: string;
    address: string;
    passport: number;
    cafe_id: number;
}


export class CreateOrderDto{
sum: number;
session_time: Date;
waiter_id: number;
client_id:number;
PC_id:number;
}

export class UpdateOrderDto{
    sum: number;
    session_time: Date;
    waiter_id: number;
    client_id:number;
    PC_id:number;   
}

    export class CreateClientDto{
    name_client:string;
    }
    
    export class UpdateClientDto{
        name_client:string;
    }

    export class CreateProviderDto{
    name_provider: string;
    }
    
    export class UpdateProviderDto{
        name_provider: string;
    }

    export class CreatePCDto{
        number:number;
        cafe_id: number;
    }
    
    export class UpdatePCDto{
        number:number;
        cafe_id: number;
    }

    export class CreateServiceDto{
        tar_id: number;
        cafe_id:number;
        provider_id:number;
    }
    
    export class UpdateServiceDto{
        tar_id: number;
        cafe_id:number;
        provider_id:number;
    }

    export class CreateTariffsDto{
        name_tar:string;
        price: number;
        data: Date;
    }
    
    export class UpdateTariffsDto{
        name_tar:string;
        price: number;
        data: Date;
    }
    
    export class CreateUserDto{
       email:string;
       password:string;
    }
    
    export class UpdateUserDto{
        email:string;
        password:string;
    }
    