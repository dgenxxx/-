/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { OfficeService } from "../office.service";
import { OfficeCreateInput } from "./OfficeCreateInput";
import { Office } from "./Office";
import { OfficeFindManyArgs } from "./OfficeFindManyArgs";
import { OfficeWhereUniqueInput } from "./OfficeWhereUniqueInput";
import { OfficeUpdateInput } from "./OfficeUpdateInput";
import { CarFindManyArgs } from "../../car/base/CarFindManyArgs";
import { Car } from "../../car/base/Car";
import { CarWhereUniqueInput } from "../../car/base/CarWhereUniqueInput";
import { CourierFindManyArgs } from "../../courier/base/CourierFindManyArgs";
import { Courier } from "../../courier/base/Courier";
import { CourierWhereUniqueInput } from "../../courier/base/CourierWhereUniqueInput";

export class OfficeControllerBase {
  constructor(protected readonly service: OfficeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Office })
  async createOffice(@common.Body() data: OfficeCreateInput): Promise<Office> {
    return await this.service.createOffice({
      data: {
        ...data,

        settlement: data.settlement
          ? {
              connect: data.settlement,
            }
          : undefined,
      },
      select: {
        address: true,
        createdAt: true,
        hoursOfOperation: true,
        id: true,
        manager: true,
        name: true,
        phone: true,

        settlement: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Office] })
  @ApiNestedQuery(OfficeFindManyArgs)
  async offices(@common.Req() request: Request): Promise<Office[]> {
    const args = plainToClass(OfficeFindManyArgs, request.query);
    return this.service.offices({
      ...args,
      select: {
        address: true,
        createdAt: true,
        hoursOfOperation: true,
        id: true,
        manager: true,
        name: true,
        phone: true,

        settlement: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Office })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async office(
    @common.Param() params: OfficeWhereUniqueInput
  ): Promise<Office | null> {
    const result = await this.service.office({
      where: params,
      select: {
        address: true,
        createdAt: true,
        hoursOfOperation: true,
        id: true,
        manager: true,
        name: true,
        phone: true,

        settlement: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Office })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateOffice(
    @common.Param() params: OfficeWhereUniqueInput,
    @common.Body() data: OfficeUpdateInput
  ): Promise<Office | null> {
    try {
      return await this.service.updateOffice({
        where: params,
        data: {
          ...data,

          settlement: data.settlement
            ? {
                connect: data.settlement,
              }
            : undefined,
        },
        select: {
          address: true,
          createdAt: true,
          hoursOfOperation: true,
          id: true,
          manager: true,
          name: true,
          phone: true,

          settlement: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Office })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteOffice(
    @common.Param() params: OfficeWhereUniqueInput
  ): Promise<Office | null> {
    try {
      return await this.service.deleteOffice({
        where: params,
        select: {
          address: true,
          createdAt: true,
          hoursOfOperation: true,
          id: true,
          manager: true,
          name: true,
          phone: true,

          settlement: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/cars")
  @ApiNestedQuery(CarFindManyArgs)
  async findCars(
    @common.Req() request: Request,
    @common.Param() params: OfficeWhereUniqueInput
  ): Promise<Car[]> {
    const query = plainToClass(CarFindManyArgs, request.query);
    const results = await this.service.findCars(params.id, {
      ...query,
      select: {
        courier: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        fuelConsumption: true,
        id: true,
        make: true,
        model: true,

        office: {
          select: {
            id: true,
          },
        },

        registrationNumber: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/cars")
  async connectCars(
    @common.Param() params: OfficeWhereUniqueInput,
    @common.Body() body: CarWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      cars: {
        connect: body,
      },
    };
    await this.service.updateOffice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/cars")
  async updateCars(
    @common.Param() params: OfficeWhereUniqueInput,
    @common.Body() body: CarWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      cars: {
        set: body,
      },
    };
    await this.service.updateOffice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/cars")
  async disconnectCars(
    @common.Param() params: OfficeWhereUniqueInput,
    @common.Body() body: CarWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      cars: {
        disconnect: body,
      },
    };
    await this.service.updateOffice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/couriers")
  @ApiNestedQuery(CourierFindManyArgs)
  async findCouriers(
    @common.Req() request: Request,
    @common.Param() params: OfficeWhereUniqueInput
  ): Promise<Courier[]> {
    const query = plainToClass(CourierFindManyArgs, request.query);
    const results = await this.service.findCouriers(params.id, {
      ...query,
      select: {
        createdAt: true,
        fullNames: true,
        id: true,

        office: {
          select: {
            id: true,
          },
        },

        password: true,
        personalNumber: true,
        phone: true,
        updatedAt: true,
        username: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/couriers")
  async connectCouriers(
    @common.Param() params: OfficeWhereUniqueInput,
    @common.Body() body: CourierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      couriers: {
        connect: body,
      },
    };
    await this.service.updateOffice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/couriers")
  async updateCouriers(
    @common.Param() params: OfficeWhereUniqueInput,
    @common.Body() body: CourierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      couriers: {
        set: body,
      },
    };
    await this.service.updateOffice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/couriers")
  async disconnectCouriers(
    @common.Param() params: OfficeWhereUniqueInput,
    @common.Body() body: CourierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      couriers: {
        disconnect: body,
      },
    };
    await this.service.updateOffice({
      where: params,
      data,
      select: { id: true },
    });
  }
}